url = "localhost:8080/"

$("#main-header").click(function() {
	$.getJSON(url, function(prophecies) {
		advice = data["prophecies"]
		set_secret_message(advice);
	});
});

function set_secret_message(paragraphs) {
  $.each(paragraphs, function(i, d) {
    p = $("#p-" + i)
    p.html("<p>" + d + "</p>")
  })
}