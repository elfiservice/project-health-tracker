var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#main_app",

  initialize: function() {
    app.foodList = new app.FoodList();

  },

  events: {
    "click #btn-search": "searchOnClick"
  },

  searchOnClick: function(e) {
        console.log(app.foodList.url, app.foodList.fetch());
        //toDO criar o listItemView

        return false;
  }

});
