// make an app element to hold everything

var App = React.createClass({
	render: function(){
		return(
			<div>
				Hello!
			</div>
		)
	}
});

React.render(
	<App />,
	document.body
);