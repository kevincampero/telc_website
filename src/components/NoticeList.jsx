import React from "react";
import "./noticeList.css";
const NoticeList = ({ link, image, title, description, date }) => {
	return (
		<>
			<div className="col">
				<a href={link}>
					<div className="notice card h-100">
						<img src={image} className="card-img-top" alt={image} />
						<div className="card-body">
							<h5 className="card-title">{title}</h5>
							<p className="card-text">{description}</p>
							<button className="btn btn-primary">Saber Más</button>
						</div>
						<div className="card-footer">
							<small className="text-body-secondary">Subido el {date}</small>
						</div>
					</div>
				</a>
			</div>
		</>
	);
};

export default NoticeList;