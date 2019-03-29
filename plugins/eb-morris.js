(function () {

    $.fn.ebMorris = function (config) {

        var self = this;
        var chart = null;

        self.append(chart);

        eb.ui.prependClass(self, "eb-morris eb-plugin");

        var defaults = {
            type: "bar",
            morris: {
                element: null,
                resize: true,
                data: [],
                parseTime: false,
                xkey: null,
                ykeys: [],
                labels: [],
                hideHover: 'auto',
                fillOpacity: 0.6,
                pointFillColors:['#ffffff'],
                pointStrokeColors: ['black'],
                xLabelAngle: 60
            }
        };

        var cmp = new eb.ui.Component(this, config, defaults);
        var schema = cmp.updateFieldSchema({ xkey: "xkey", ykeys: [], labels: [] });
        var cfg = cmp.config();

        // no panel support
        // var root = $("<div id=\"{0}\">".format(self.get(0).id + "_ebmorris"));        
        // cmp.panel(self);

        function _init() {
            _ensureComponent(function () {
                cmp.bindData(_bind);
            });
        }

        function _bind() {

            _setOptions();

            var cht = cfg.morris;

            // morris needs instantiation by id
            // get(0) can be used with ebinit, js instantiation needs to pull from selector

            var id = self.get(0);
            if (id)
                id = id.id;
            else
                id = self.selector;

            $("#" + id).empty();

            cht.element = id;

            switch (cfg.type) {
                case "area":
                    chart = new Morris.Area(cht);
                    break;

                case "line":
                    chart = new Morris.Line(cht);
                    break;

                case "bar":
                    chart = new Morris.Bar(cht);
                    break;

                case "donut":
                    _donutTransform();
                    chart = new Morris.Donut(cht);
                    if (typeof cfg.selectIndex != 'undefined') {                        
                        setTimeout(function() {
                        chart.select(cfg.selectIndex);
                        }, 500);
                    }
                    break;
            }

            cmp.ready();

        }

        function _ensureComponent(cb) {

            if (typeof Morris == 'undefined') {
                eb.loadCss('//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css', function () {
                    eb.loadJs([
                        '//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js',
                        '//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js'], function () {
                            cb();
                        });
                });
            }
            else cb();

        }

        function _donutTransform() {

            var cht = cfg.morris;
            var d = cht.data;
            var d2 = [];

            d.forEach(function (r) {

                d2.push({label: r[cht.xkey], value: r[cht.ykeys[0]], record: r })

            });

            cht.data = d2;

        }

        function _setOptions() {

            var table = cmp.data();
            var cht = cfg.morris;
            var labels = [];
            
            cht.data = table.Rows;

            schema.ykeys.forEach(function (y, i) {
                labels.push(table.getColumnTitle(y));
            });

            cht.xkey = schema.xkey;
            cht.ykeys = schema.ykeys;
            cht.labels = labels;

        }


        this.config = function () {
            return cfg;
        }

        this.databind = function () {
            _bind();
        }

        _init();
        return this;
    }

})();
