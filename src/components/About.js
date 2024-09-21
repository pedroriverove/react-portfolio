import React, {Component} from "react";
import laravelSolid from "@iconify/icons-logos/laravel";
import nodeIcon from "@iconify/icons-logos/nodejs";
import nestIcon from "@iconify/icons-logos/nestjs";
import phpIcon from "@iconify/icons-logos/php";
import scriptIcon from "@iconify/icons-logos/javascript";
import typeIcon from "@iconify/icons-logos/typescript-icon-round";
import vueIcon from '@iconify/icons-logos/vue';
import reactIcon from '@iconify/icons-logos/react';
import {Icon} from "@iconify/react";

class About extends Component {
    render() {
        if (this.props.sharedBasicInfo) {
            var profilepic = "images/" + this.props.sharedBasicInfo.image;
        }
        if (this.props.resumeBasicInfo) {
            var about = this.props.resumeBasicInfo.description;
            var database = this.props.resumeBasicInfo.segments.database;
            var back = this.props.resumeBasicInfo.segments.back;
            var front = this.props.resumeBasicInfo.segments.front;
            var devops = this.props.resumeBasicInfo.segments.devops;
            var solid = this.props.resumeBasicInfo.segments.solid;
            var scrum = this.props.resumeBasicInfo.segments.scrum;
            var organize = this.props.resumeBasicInfo.segments.organize;
            var sectionName = this.props.resumeBasicInfo.section_name.about;
        }

        return (
            <section id="about">
                <div className="col-md-12">
                    <h1 style={{color: "black"}}>
                        <span>{sectionName}</span>
                    </h1>
                    <div className="row justify-content-center mx-auto mb-5">
                        <div className="col-md-4 text-center">
                            <div className="polaroid">
                                <span style={{cursor: "auto"}}>
                                  <img
                                      src={profilepic}
                                      alt="Avatar placeholder"
                                      className="img-fluid"
                                  />
                                  <Icon
                                      icon={nodeIcon}
                                      style={{fontSize: "200%", margin: "10% 5% 0 5%"}}
                                  />
                                  <Icon
                                      icon={nestIcon}
                                      style={{fontSize: "200%", margin: "10% 5% 0 5%"}}
                                  />
                                  <Icon
                                      icon={phpIcon}
                                      style={{fontSize: "200%", margin: "10% 5% 0 5%"}}
                                  />
                                  <Icon
                                      icon={laravelSolid}
                                      style={{fontSize: "200%", margin: "10% 5% 0 5%"}}
                                  />
                                  <Icon
                                      icon={scriptIcon}
                                      style={{fontSize: "200%", margin: "10% 5% 0 5%"}}
                                  />
                                  <Icon
                                      icon={typeIcon}
                                      style={{fontSize: "200%", margin: "10% 5% 0 5%"}}
                                  />
                                  <Icon
                                      icon={vueIcon}
                                      style={{fontSize: "200%", margin: "10% 10% 0 10%"}}
                                  />
                                  <Icon
                                      icon={reactIcon}
                                      style={{fontSize: "200%", margin: "10% 10% 0 10%"}}
                                  />
                                </span>
                            </div>
                        </div>
                        <div className="col-md-8 center">
                            <div className="col-md-10">
                                <div className="card">
                                    <div className="card-header">
                                        <span
                                            className="iconify"
                                            data-icon="emojione:red-circle"
                                            data-inline="false"
                                        ></span>{" "}
                                        &nbsp;{" "}
                                        <span
                                            className="iconify"
                                            data-icon="twemoji:yellow-circle"
                                            data-inline="false"
                                        ></span>{" "}
                                        &nbsp;{" "}
                                        <span
                                            className="iconify"
                                            data-icon="twemoji:green-circle"
                                            data-inline="false"
                                        ></span>
                                    </div>
                                    <div
                                        className="card-body font-trebuchet text-justify ml-3 mr-3"
                                        style={{
                                            height: "auto",
                                            fontSize: "132%",
                                            lineHeight: "200%",
                                        }}
                                    >
                                        <br/>
                                        <br/>
                                        {about}
                                        <br/>
                                        <br/>
                                        {database}
                                        <br/>
                                        {back}
                                        <br/>
                                        {front}
                                        <br/>
                                        {devops}
                                        <br/>
                                        {solid}
                                        <br/>
                                        {scrum}
                                        <br/>
                                        {organize}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
