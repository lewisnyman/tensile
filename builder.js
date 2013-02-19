$.ajax({
  type: 'GET',
  url: 'structure.yml',
  // type of data we are expecting in return:
  dataType: 'text',
  success: function(data){
    console.log(data);
    var doc = jsyaml.load(data);
    console.log(doc);
    var page   = $("#page").html();
    var template = Handlebars.compile(page);
    var html = template(doc);
    $('body').html(html);
  },
  error: function(xhr, type){
    alert('Ajax error!')
  }
})