import React, {Component} from "react";

class Skills extends Component {
	render() {
		if (this.props.sharedSkills && this.props.resumeBasicInfo) {
			var sectionName = this.props.resumeBasicInfo.section_name.skills;
			var frontBasic = this.props.sharedSkills.icons.front.basic.map(function (skills, i) {
				return (
					<li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{fontSize: "220%"}}>
                  <p
										className="text-center"
										style={{fontSize: "30%", marginTop: "4px"}}
									>
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
					</li>
				);
			});
			var frontAdvanced = this.props.sharedSkills.icons.front.advanced.map(function (skills, i) {
				return (
					<li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{fontSize: "220%"}}>
                  <p
										className="text-center"
										style={{fontSize: "30%", marginTop: "4px"}}
									>
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
					</li>
				);
			});
			var backBasic = this.props.sharedSkills.icons.back.basic.map(function (skills, i) {
				return (
					<li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{fontSize: "220%"}}>
                  <p
										className="text-center"
										style={{fontSize: "30%", marginTop: "4px"}}
									>
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
					</li>
				);
			});
			var backAdvanced = this.props.sharedSkills.icons.back.advanced.map(function (skills, i) {
				return (
					<li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{fontSize: "220%"}}>
                  <p
										className="text-center"
										style={{fontSize: "30%", marginTop: "4px"}}
									>
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
					</li>
				);
			});
			var tools = this.props.sharedSkills.icons.tools.map(function (skills, i) {
				return (
					<li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{fontSize: "220%"}}>
                  <p
										className="text-center"
										style={{fontSize: "30%", marginTop: "4px"}}
									>
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
					</li>
				);
			});
		}

		return (
			<section id="skills">
				<div className="col-md-12">
					<div className="col-md-12">
						<h1 className="section-title">
							<span className="text-white">{sectionName}</span>
						</h1>
					</div>
					<div className="col-md-12 text-center">
						<h2>
							<span className="text-white">Frontend</span>
						</h2>
						<ul className="list-inline mx-auto skill-icon">{frontBasic}</ul>
						<ul className="list-inline mx-auto skill-icon">{frontAdvanced}</ul>
					</div>
					<div className="col-md-12 text-center pt-3">
						<h2>
							<span className="text-white">Backend</span>
						</h2>
						<ul className="list-inline mx-auto skill-icon">{backBasic}</ul>
						<ul className="list-inline mx-auto skill-icon">{backAdvanced}</ul>
					</div>
					<div className="col-md-12 text-center pt-3">
						<h2>
							<span className="text-white">Repository</span>
						</h2>
						<ul className="list-inline mx-auto skill-icon">{tools}</ul>
					</div>
				</div>
			</section>
		);
	}
}

export default Skills;
