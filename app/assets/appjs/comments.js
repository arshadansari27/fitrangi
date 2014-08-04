$(document).ready(function(){
	console.log('On Comments.js')
	var App = window.App;

	var postComment = function(options) {
		App.post({
			url: '/comment',
			parameters: {comment: options.comment, key: options.key},
    		success: function(message, node) { 
    			console.log('in success callback' + message);
			},
			error: function(message, node) {
    			console.log('in error callback' + message);
    		}
		});
	};

	$('#comment_form').on('click', '#comment_submit', function(e) {
		e.stopPropagation();
		var $comment = $('#comment_text').val();
		var $key = $('#comment_form').attr('data-key');
		postComment({comment:$comment, key:$key});
	});

});
