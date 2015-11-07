openerp.oepetstore = function(instance, local) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    var MyClass = instance.web.Class.extend({
        init: function(name) {
            this.name = name;
        },
        say_hello: function() {
            console.log("hello", this.name);
        },
    });
    var MySpanishClass = MyClass.extend({
        say_hello: function() {
            this._super();
            console.log("translation in Spanish: hola", this.name);
        },
    });
    var my_object = new MySpanishClass("Alex")
    my_object.say_hello()

    local.GreetingsWidget = instance.Widget.extend({
        className: 'oe_petstore_greetings',
        init:function(parent, name) {
            this._super(parent);
            this.name = name;
        },
        start: function() {
            this.$el.append("<div>We are so happy to see you again in this menu!</div>");
            console.log(this.getParent().$el);
        },
    });

    local.HomePage = instance.Widget.extend({
        className: 'oe_petstore_homepage',
        start: function() {
            this.$el.append("<div>Hello dear Odoo user!</div>");
            var greeting = new local.GreetingsWidget(this);
            console.log(this.getChildren()[0].$el);
            return greeting.appendTo(this.$el);
        },
    });


    instance.web.client_actions.add('petstore.homepage', 'instance.oepetstore.HomePage');
}
