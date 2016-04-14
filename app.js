var React = require('react');

// hardcoded data for the tabs
var tabList = [
	{ 'id': 1, 'name': 'Mike', 'url': 'http://www.teenagemutantninjaturtles.com/wp-content/uploads/2012/04/Ninja-Turtles-Michelangelo-cover-photo.jpg'},
    { 'id': 2, 'name': 'Donnie', 'url': 'http://static.tumblr.com/79d6283ba71c3827c0f74b3e969b8d28/wvxcw4r/4o1mzhb0e/tumblr_static_tmnt_donatello_1600.jpg' },
    { 'id': 3, 'name': 'Raph', 'url': 'http://crimsonmonkey.com/files/media/DaveOMac/2014/Top5-Leo-3.jpg' },
    { 'id': 4, 'name': 'Leo', 'url': 'http://crimsonmonkey.com/files/media/DaveOMac/2014/Top5-Leo-1.jpg' }
];

// make the tabs reference data from tabList
var Tab = React.createClass({
	render: function() {
		return(
			<li><a href={this.props.url}>{this.props.name}</a></li>
		)
	}
});

// use map to generate the tabs from the tabList
var Tabs = React.createClass({
	render: function() {
		return(
			<nav>
				<ul>
					{this.props.tabList.map(function(tab){
						return (
							<Tab url={tab.url} name={tab.name} />
						);
					})}
				</ul>
			</nav>
		)
	}
});

// make an app element to hold everything

var App = React.createClass({
	render: function(){
		return(
			<div>
				<Tabs tabList={tabList} />
			</div>
		)
	}
});

React.render(
	<App />,
	document.body
);