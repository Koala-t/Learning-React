// create a component to hold the tabbed navigation

var Tabs = React.createClass({
	render: function() {
		return(
			<nav>
				<ul></ul>
			</nav>
		)
	}
});

// add another component for each individual tab

var Tab = React.createClass({
	render: function() {
		return(
			<li></li>
		)
	}
});