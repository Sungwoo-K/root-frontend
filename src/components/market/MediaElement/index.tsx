function MediaElement(props) {
  const { contentType, uuidFileName } = props;

  if (contentType.includes("image")) {
    return (
      <img
        width={300}
        src={`http://localhost:8080/user/profile/${uuidFileName}`}
      />
    );
  } else {
    return (
      <video>
        <source
          src={`http://localhost:8080/user/profile/${uuidFileName}`}
          type={contentType}
        ></source>
      </video>
    );
  }
}
