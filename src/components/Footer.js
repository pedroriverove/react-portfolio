import React, {Component} from "react";

class Footer extends Component {

	render() {
		if (this.props.sharedBasicInfo) {
			var networks = this.props.sharedBasicInfo.social.map(function (network) {
				return (
					<span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
				);
			});
		}

		var currentTime = new Date();
		var year = currentTime.getFullYear();

		return (
			<footer>
				<div className="col-md-12">
					<div className="social-links">{networks}</div>
					<div className="copyright py-4 text-center">
						<div className="container">
							<small>
								Copyright &copy;&nbsp;
								{year}
								&nbsp;- Todos los derechos reservados
							</small>
						</div>
						<div className="container pb-4">
							<small>
								Este sitio web es propiedad y es administrado por
								&nbsp;
								<strong>
									{this.props.sharedBasicInfo
										? this.props.sharedBasicInfo.footer_name
										: "???"}
								</strong>
							</small>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
