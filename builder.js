$.ajax({
  type: 'GET',
  url: 'structure.yml',
  // type of data we are expecting in return:
  dataType: 'text',
  success: function(data){
    var doc = jsyaml.load(data);
    var template = Handlebars.compile(page);
    var html = template(doc);
    $('body').html(html);
    $('iframe').iframeAutoHeight();
  },
  error: function(xhr, type){
    alert('Ajax error!')
  }
})

var title = "<title>{{title}} | {{subtitle}}</title>";

var page = 
"<div class='page'>" +
"<h1>{{title}}</h1>" +
"<h2>{{subtitle}}</h2>" +
"<p>{{introduction}}</p>" +
"<h2>Colors</h2>" +
"<ul>" +
"{{#each colors}}" +
"  <li>{{name}} - #{{hex}}</li>" +
"{{/each}}" +
"</ul>" +
"<h2>Components</h2>" +
"{{#each components}}" +
"  <section>" +
"    <h3>{{title}}</h3>" +
"    <iframe src='{{url}}'></iframe>" +
"  <section>" +
"{{/each}}" +
"</div>";