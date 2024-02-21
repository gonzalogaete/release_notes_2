/* eslint-disable react/prop-types */
import { useState } from "react";

const ReleaseNotes = ({ releaseData }) => {
  const { version, title, sidebarLinks, content } = releaseData;
  const [selectedLink, setSelectedLink] = useState(sidebarLinks[0].url);

  return (
    <div className="container mt-1">
      <h1 className="display-4 text-center mb-4">{title}</h1>
      <div className="row">
        <div className="col-md-3">
          <div className="card bg-light">
            <div className="card-body">
              <h3 className="card-title">Versions</h3>
              <ul className="list-group">
                {sidebarLinks &&
                  sidebarLinks.map((link, index) => (
                    <li
                      key={index}
                      className={`list-group-item ${selectedLink === link.url ? 'bg-success' : 'bg-light'
                        }`}
                    >
                      <a
                        href={link.url}
                        className={`btn btn-light btn-block ${selectedLink === link.url ? 'active' : 'bg-light'
                          }`}
                        onMouseOver={() => setSelectedLink(link.url)}
                        onMouseOut={() => setSelectedLink(selectedLink)}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card bg-light">
            <div className="card-body">
              <h2 className="card-title">Version {version}</h2>
              {content &&
                content.map((item, index) => (
                  <div key={index}>
                    <h3>{item.section}</h3>
                    <p>{item.details}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReleaseNotes;
