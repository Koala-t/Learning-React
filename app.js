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
	handleClick: function(e) {
		e.preventDefault();
		this.props.handleClick();
	},
	render: function() {
		return(
			<li className={this.props.isCurrent ? 'current' : null}>
				<a onClick={this.handleClick} href={this.props.url}>{this.props.name}</a>
			</li>
		)
	}
});

// use map to generate the tabs from the tabList
var Tabs = React.createClass({
	handleClick: function() {
		this.props.changeTab(tab);
	},
	render: function() {
		return(
			<nav>
				<ul>
					{this.props.tabList.map(function(tab){
						return (
							<Tab 
								key={tab.id}
								handleClick={this.handleClick.bind(this, tab)}
								url={tab.url}
								name={tab.name} />
						);
					}.bind(this)}
				</ul>
			</nav>
		)
	}
});

//include content

var Content = React.createClass({
    render: function(){
        return(
            <div className="content">
                {this.props.currentTab === 1 ?
                <div className="mike">
                    <img src="http://s.mlkshk.com/r/104TN" />
                </div>
                :null}

                {this.props.currentTab === 2 ?
                <div className="donnie">
                    <img src="http://s.mlkshk.com/r/103AG" />
                </div>
                :null}

                {this.props.currentTab === 3 ?
                <div className="raph">
                    <img src="http://s.mlkshk.com/r/JAUD" />
                </div>
                :null}

                {this.props.currentTab === 4 ?
                <div className="leo">
                    <img src="http://s.mlkshk.com/r/ZJPL" />
                </div>
                :null}
            </div>
        );
    }
});

// make an app element to hold everything

var App = React.createClass({
	getInitialState: function () {
		return {
			tabs: tabs;
			currentTab: 1
		};
	},
	changeTab: function(tab) {
		this.setState({currentTab: tab.id});
	},
	render: function(){
		return(
			<div>
				<Tabs 
					currentTab={this.state.currentTab}
					tabList={this.state.tabs} />
					changeTab={this.changeTab} 
			</div>
		)
	}
});

React.render(
	<App />,
	document.body
);