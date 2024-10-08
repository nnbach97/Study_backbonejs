// Backbone Model

var Blog = Backbone.Model.extend({
  default: {
    author: "",
    title: "",
    url: "",
  },
});

// Bacnkbone Collection
var Blogs = Backbone.Collection.extend({});

// Instantiate two Blogs
var blog1 = new Blog({
  author: "Bach",
  title: "Bach Dzai",
  url: "bach.com",
});

var blog2 = new Blog({
  author: "Trang",
  title: "Trang Zinh gai",
  url: "trang.com",
});

// Instantiate a Collection

var blogs = new Blogs([blog1, blog2]);

//----------------------------

// Backbone View for one blog
var BlogView = Backbone.View.extend({
  model: new Blog(),
  tagName: "tr",
  initialize: function () {
    this.template = _.template($(".blogs-list-template").html());
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  },
});

// Backbone View for all blog
var BlogsView = Backbone.View.extend({
  model: new Blog(),
  el: $(".blogs-list"),
  initialize: function () {
    this.model.on("add", this.render(), this);
  },
  render: function () {
    var self = this;
    this.$el.html("");
    _.each(this.model.toArray(), function (blog) {
      self.$el.append(new BlogView({ model: blog }).render().$el);
    });
  },
});

$(document).ready(function () {
  $(".add-blog").on("click", function () {
    var blog = new Blog({
      author: $(".author-input").val(),
      title: $(".title-input").val(),
      url: $(".url-input").val(),
    });

    console.log(blog.toJSON());
  });
});
