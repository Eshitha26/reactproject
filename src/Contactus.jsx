import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Contactus() {
  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="w-100 d-flex justify-content-center">
        <div
          className="card text-center shadow-lg p-4 mb-4 bg-light rounded"
          style={{ width: "100%", maxWidth: "800px" }}
        >
          <div className="card-body">
            <h1 className="fw-bold">Contact Us</h1>
            <p className="lead mt-3">
              Feel free to reach out to us anytime! We are here to help.
            </p>

            <ul className="list-group list-group-flush mt-4">
              <li className="list-group-item">
                <FontAwesomeIcon icon={faEnvelope} className="me-2 text-danger" />
                Email:{" "}
                <a href="mailto:freshmart@example.com">freshmart@example.com</a>
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faPhone} className="me-2 text-success" />
                Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="me-2 text-primary"
                />
                Location: 456 Example Avenue, Tech City, USA
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="w-100 d-flex justify-content-center">
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373631532264!3d-37.817209979751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2c57f1d%3A0x1022b5428f5d8401!2sTech%20Street!5e0!3m2!1sen!2sus!4v1628860665715!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Contactus;
