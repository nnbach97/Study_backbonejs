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

var blogs = new Blogs([blog1, blog2]);
