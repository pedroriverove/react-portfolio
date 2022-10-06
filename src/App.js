import "./App.scss";
import $ from "jquery";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React, {Component} from "react";
import Skills from "./components/Skills";

class App extends Component {

	constructor(props) {
		super();
		this.state = {
			foo: "bar",
			resumeData: {},
			sharedData: {},
		};
	}

	applyPickedLanguage(pickedLanguage) {
		document.documentElement.lang = pickedLanguage;
		var resumePath =
			document.documentElement.lang === window.$primaryLanguage
				? `res_primaryLanguage.json`
				: `res_primaryLanguage.json`;
		this.loadResumeFromPath(resumePath);
	}

	componentDidMount() {
		this.loadSharedData();
		this.applyPickedLanguage(
			window.$primaryLanguage
		);
	}

	loadResumeFromPath(path) {
		$.ajax({
			url: path,
			dataType: "json",
			cache: false,
			success: function (data) {
				this.setState({resumeData: data});
			}.bind(this),
			error: function (xhr, status, err) {
				alert(err);
			},
		});
	}

	loadSharedData() {
		$.ajax({
			url: `portfolio_shared_data.json`,
			dataType: "json",
			cache: false,
			success: function (data) {
				this.setState({sharedData: data});
				document.title = `${this.state.sharedData.basic_info.name}`;
			}.bind(this),
			error: function (xhr, status, err) {
				alert(err);
			},
		});
	}

	render() {
		return (
			<div>
				<Header sharedData={this.state.sharedData.basic_info}/>
				<About
					resumeBasicInfo={this.state.resumeData.basic_info}
					sharedBasicInfo={this.state.sharedData.basic_info}
				/>
				<Skills
					sharedSkills={this.state.sharedData.skills}
					resumeBasicInfo={this.state.resumeData.basic_info}
				/>
				<Experience
					resumeExperience={this.state.resumeData.experience}
					resumeBasicInfo={this.state.resumeData.basic_info}
				/>
				<Footer sharedBasicInfo={this.state.sharedData.basic_info}/>
			</div>
		);
	}
}

export default App;
