import React, {Component} from "react";

function renderSkill(skills, i) {
	return (
		<li className="list-inline-item mx-3" key={i}>
      <span>
        <div className="text-center skills-tile">
          <i className={skills.class} style={{fontSize: "220%"}}>
            <p className="text-center" style={{fontSize: "30%", marginTop: "4px"}}>
              {skills.name}
            </p>
          </i>
        </div>
      </span>
		</li>
	);
}

class Skills extends Component {
	render() {
		if (this.props.sharedSkills && this.props.resumeBasicInfo) {
			var sectionName = this.props.resumeBasicInfo.section_name.skills;
			var backend = this.props.sharedSkills.icons.backend.map(renderSkill);
			var databases = this.props.sharedSkills.icons.databases.map(renderSkill);
			var devops = this.props.sharedSkills.icons.devops.map(renderSkill);
			var frontendBasic = this.props.sharedSkills.icons.frontend.basic.map(renderSkill);
			var frontendAdvanced = this.props.sharedSkills.icons.frontend.advanced.map(renderSkill)
			var git = this.props.sharedSkills.icons.git.map(renderSkill);
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
							<span className="text-white">Databases</span>
						</h2>
						<ul className="list-inline mx-auto skill-icon">{databases}</ul>
					</div>
					<div className="col-md-12 text-center pt-3">
						<h2>
							<span className="text-white">Back-end</span>
						</h2>
						<ul className="list-inline mx-auto skill-icon">{backend}</ul>
					</div>
					<div className="col-md-12 text-center pt-3">
						<h2>
							<span className="text-white">Front-end</span>
						</h2>
						<ul className="list-inline mx-auto skill-icon">{frontendBasic}</ul>
						<ul className="list-inline mx-auto skill-icon">{frontendAdvanced}</ul>
					</div>
					<div className="col-md-12 text-center pt-3">
						<h2>
							<span className="text-white">DevOps</span>
						</h2>
						<ul className="list-inline mx-auto skill-icon">{devops}</ul>
					</div>
					<div className="col-md-12 text-center pt-3">
						<h2>
							<span className="text-white">Version control</span>
						</h2>
						<ul className="list-inline mx-auto skill-icon">{git}</ul>
					</div>
				</div>
			</section>
		);
	}
}

export default Skills;
