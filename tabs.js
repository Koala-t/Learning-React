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

// make an array to populate the Tabs

var tablist = [
	{ 'id': 1, 'name': 'Mike', 'url': 'http://www.teenagemutantninjaturtles.com/wp-content/uploads/2012/04/Ninja-Turtles-Michelangelo-cover-photo.jpg'},
    { 'id': 2, 'name': 'Donnie', 'url': 'http://static.tumblr.com/79d6283ba71c3827c0f74b3e969b8d28/wvxcw4r/4o1mzhb0e/tumblr_static_tmnt_donatello_1600.jpg' },
    { 'id': 3, 'name': 'Raph', 'url': 'http://crimsonmonkey.com/files/media/DaveOMac/2014/Top5-Leo-3.jpg' },
    { 'id': 4, 'name': 'Leo', 'url': 'http://crimsonmonkey.com/files/media/DaveOMac/2014/Top5-Leo-1.jpg' }
]