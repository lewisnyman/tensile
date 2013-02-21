(function () {

  "use strict";
  
  function manageIframes(){
    $('iframe').iframeAutoHeight();
    $('.is-resizeable')
      .resizable({alsoResize: ".iframe-container", minWidth: 140, maxHeight: 40, minHeight: 40, containment: "parent", handles: "e"})
      .on( "resize", function( event, ui ) {
        $('.is-for-width').text(ui.size.width + 'px');
      } );
    $('.is-for-width').text($('.is-resizeable').width() + 'px');
  }
  
  $.ajax({
    type: 'GET',
    url: 'structure.yml',
    dataType: 'text',
    success: function(data){
      var doc = jsyaml.load(data);
      var pagetemplate = Handlebars.compile(page);
      var pagehtml = pagetemplate(doc);
      var titletemplate = Handlebars.compile(title);
      var titlehtml = titletemplate(doc);
      $('#page').html(pagehtml);
      $('head').append(titlehtml);
      manageIframes();
    },
    error: function(xhr, type){
      alert('Ajax error!')
    }
  })
  
  var title = "<title>{{title}} | {{subtitle}}</title>";
  
  var page = 
  "<h1>{{title}}</h1>" +
  "<h2>{{subtitle}}</h2>" +
  "<p>{{introduction}}</p>" +
  "<h2>Colors</h2>" +
  "<ul class='clearfix color-list'>" +
  "{{#each colors}}" +
  "  <li class='color {{#if dark}} color-dark{{/if}}'  style='background-color:#{{hex}}'>{{name}} - #{{hex}}</li>" +
  "{{/each}}" +
  "</ul>" +
  "<h2>Components</h2>" +
  "{{#each components}}" +
  "  <section>" +
  "    <h3>{{title}}</h3>" +
  "    <div class='iframe-container'>" +
  "      <iframe src='{{url}}'></iframe>" +
  "    </div>" +
  "  <section>" +
  "{{/each}}";

})();
