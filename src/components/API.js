import axios from "axios";
import React, { useEffect, useState } from "react";

const API = () => {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetching user data using the JavaScript fetch API
  const fetchUserData = async () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    let incomingUserData = await fetch(url);
    let jsonData = await incomingUserData.json();

    //   suite, street, city, lat, lng;
    // console.log(jsonData);
    // jsonData.map((data) => console.log(data.address.suite));
    // jsonData.map((data) => console.log(data.address.street));
    // jsonData.map((data) => console.log(data.address.city));
    // jsonData.map((data) => console.log(data.address.geo.lat));
    // jsonData.map((data) => console.log(data.address.geo.lng));
    setData(jsonData);

    // return jsonData;
  };
  //   console.log(data);

  // invoking the fetch function
  useEffect(() => {
    fetchUserData();
    setIsLoading(false);
  }, []);

  // fetching the image data using axios

  const fetchImageData = async () => {
    let url = "https://jsonplaceholder.typicode.com/photos";

    //   axios method one
    // let incomingImageData = await axios.get(url);
    // //   console.log(incomingImageData.data);
    // let images = await incomingImageData.data;
    // setImages(images);

    //   axios method two
    let incomingImageData = await axios
      .get(url, {
        params: {
          _page: 1,
          _limit: 10,
        },
      })
      .then((response) => response.data)
      .catch((err) => console.log(err));

    // console.log(
    //   incomingImageData.map((img) => {
    //     console.log(img.url);
    //   })
    // );

    // const singleImgData = incomingImageData.map((img) => {
    //   return img.url;
    // });

    // console.log(singleImgData);
    // setImages(singleImgData);
    setImages(incomingImageData);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchImageData();
    setIsLoading(false);
  }, []);

  console.log(images);

  if (isLoading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div className="">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-6">
            <APICard />
          </div> */}

          {data.map((user) => {
            return (
              <div className="col-md-4 g-3" key={user.id}>
                <APICard {...user} />
              </div>
            );
          })}

          {/* {data.map((user) => {
            return (
              <div className="col-md-4 g-3" key={user.id}>
                {images.map((img) => {
                  return (
                    <div className="g-4" key={img.id}>
                      <APICard {...user} {...img} />
                    </div>
                  );
                })}
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

const APICard = (props) => {
  const { name, username, email, address, website, url } = props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      {/* <img src={url} className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{username}</h6>
        <p className="card-text">{email}</p>
        <p className="card-text">
          {/* suite, street, city, lat, lng */}
          <span>{address.suite},</span> <span>{address.street}</span>,
          <span>{address.city}</span>
        </p>

        <p>
          <span>{address.geo.lat}</span>, <span>{address.geo.lng}</span>
        </p>

        <a href="#" className="card-link">
          {website}
        </a>
      </div>
    </div>
  );
};

export default API;
