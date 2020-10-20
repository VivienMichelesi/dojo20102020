import React from 'react';

const article = [
  {
    image: {
      src: "https://picsum.photos/id/1/240/180",
      alt: "Man pretending to work on a computer"
    },
    titre: "Lorem Ipsum",
    auteur: "By Denise Lane under",
    tag1: "JavaScript",
    tag2: "React",
    tag3: "",
    tag4: "",
    tag5: "",
    avatar: "https://randomuser.me/api/portraits/women/24.jpg",
    paragraphe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    image: {
      src: "https://picsum.photos/id/2/240/180",
      alt: "Man pretending to work on a computer"
    },
    titre: "Lorem Ipsum",
    auteur: "By Denise Lane under",
    tag1: "JavaScript",
    tag2: "React",
    tag3: "",
    tag4: "",
    tag5: "",
    avatar: "https://randomuser.me/api/portraits/women/24.jpg",
    paragraphe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    image: {
      src: "https://picsum.photos/id/3/240/180",
      alt: "Man pretending to work on a computer"
    },
    titre: "Lorem Ipsum",
    auteur: "By Denise Lane under",
    tag1: "JavaScript",
    tag2: "React",
    tag3: "",
    tag4: "",
    tag5: "",
    avatar: "https://randomuser.me/api/portraits/women/24.jpg",
    paragraphe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    image: {
      src: "https://picsum.photos/id/4/240/180",
      alt: "Man pretending to work on a computer"
    },
    titre: "Lorem Ipsum",
    auteur: "By Denise Lane under",
    tag1: "JavaScript",
    tag2: "React",
    tag3: "",
    tag4: "",
    tag5: "",
    avatar: "https://randomuser.me/api/portraits/women/24.jpg",
    paragraphe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
];

function ListArticle(test) => {
  return(
  test.map(article =>
    <section className="post d-flex my-5">
      <img
        key={article.image.src}
        src={article.image.src}
        alt={article.image.alt}
      />
      <div className="post-inner flex-grow-1">
        <div className="post-header d-flex">
          <div className="post-meta flex-grow-1">
            <h2>{article.titre}</h2>
            <p>
              {article.auteur}
              <span className="badge badge-warning">{article.tag1}</span>
              <span className="badge badge-info">{article.tag2}</span>
              <span className="badge badge-info">{article.tag3}</span>
              <span className="badge badge-info">{article.tag4}</span>
              <span className="badge badge-info">{article.tag5}</span>
            </p>
          </div>
          <img
            className="post-avatar"
            src={article.avatar}
          />
        </div>
        <p>
          {article.paragraphe}
        </p>
      </div>
    </section>
  ))
}


const Container = () => {
  return (
    <div classNameName="container pt-5">
      <div className="row">
        {/* Posts column */}
        <div className="col-md-8 col-xs-12">
          {/*  Blog post */}
          <section className="post d-flex my-5">
            <img
              src="https://picsum.photos/id/1/240/180"
              alt="Man pretending to work on a computer"
            />
            <div className="post-inner flex-grow-1">
              <div className="post-header d-flex">
                <div className="post-meta flex-grow-1">
                  <h2>Lorem Ipsum</h2>
                  <p>
                    By Denise Lane under
                  <span className="badge badge-warning">JavaScript</span>
                    <span className="badge badge-info">React</span>
                  </p>
                </div>
                <img
                  className="post-avatar"
                  src="https://randomuser.me/api/portraits/women/24.jpg"
                />
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
            </p>
            </div>
          </section>

          {/* Blog post */}
          <section className="post d-flex my-5">
            <img
              src="https://picsum.photos/id/2/240/180"
              alt="Man pretending to work on a computer"
            />
            <div className="post-inner flex-grow-1">
              <div className="post-header d-flex">
                <div className="post-meta flex-grow-1">
                  <h2>Lorem Ipsum</h2>
                  <p>
                    By Rhonda Hicks under
                  <span className="badge badge-warning">JavaScript</span>
                    <span className="badge badge-info">React</span>
                  </p>
                </div>
                <img
                  className="post-avatar"
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                />
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
            </p>
            </div>
          </section>

          {/* Blog post*/}
          <section className="post d-flex my-5">
            <img
              src="https://picsum.photos/id/3/240/180"
              alt="Man pretending to work on a computer"
            />
            <div className="post-inner flex-grow-1">
              <div className="post-header d-flex">
                <div className="post-meta flex-grow-1">
                  <h2>Lorem Ipsum</h2>
                  <p>
                    By Clifton Foster under
                  <span className="badge badge-warning">JavaScript</span>
                    <span className="badge badge-info">React</span>
                  </p>
                </div>
                <img
                  className="post-avatar"
                  src="https://randomuser.me/api/portraits/men/25.jpg"
                />
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
            </p>
            </div>
          </section>

          {/* Blog post */}
          <section className="post d-flex my-5">
            <img
              src="https://picsum.photos/id/4/240/180"
              alt="Man pretending to work on a computer"
            />
            <div className="post-inner flex-grow-1">
              <div className="post-header d-flex">
                <div className="post-meta flex-grow-1">
                  <h2>Lorem Ipsum</h2>
                  <p>
                    By Stacy Soto under
                  <span className="badge badge-warning">JavaScript</span>
                    <span className="badge badge-info">React</span>
                  </p>
                </div>
                <img
                  className="post-avatar"
                  src="https://randomuser.me/api/portraits/women/94.jpg"
                />
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
            </p>
            </div>
          </section>
        </div>

        {/* Sidebar column */}
        <div className="col-md-3 offset-md-1 col-xs-12 mt-5">
          {/* Monthly archive widget */}
          <div className="widget mb-5">
            <h4>Archives</h4>
            <ul>
              <li>
                <a href="#">April 2020</a>
              </li>
              <li>
                <a href="#">March 2020</a>
              </li>
              <li>
                <a href="#">February 2020</a>
              </li>
              <li>
                <a href="#">January 2020</a>
              </li>
              <li>
                <a href="#">December 2019</a>
              </li>
            </ul>
          </div>

          {/* Author list widget */}
          <div className="widget mb-5">
            <h4>Authors</h4>
            <ul>
              <li className="authors-widget-item mb-1">
                <img src="https://randomuser.me/api/portraits/women/24.jpg" />
                <a href="#">Denise Lane</a>
              </li>
              <li className="authors-widget-item mb-1">
                <img src="https://randomuser.me/api/portraits/women/2.jpg" />
                <a href="#">Rhonda Hicks</a>
              </li>
              <li className="authors-widget-item mb-1">
                <img src="https://randomuser.me/api/portraits/men/25.jpg" />
                <a href="#">Clifton Foster</a>
              </li>
              <li className="authors-widget-item mb-1">
                <img src="https://randomuser.me/api/portraits/women/94.jpg" />
                <a href="#">Stacy Soto</a>
              </li>
              <li className="authors-widget-item mb-1">
                <img src="https://randomuser.me/api/portraits/men/36.jpg" />
                <a href="#">Clarence Burton</a>
              </li>
            </ul>
          </div>

          {/* Tag cloud widget */}
          <div className="widget mb-5">
            <h4>Tags</h4>
            <span className="badge badge-warning">JavaScript</span>
            <span className="badge badge-info">React</span>
            <span className="badge badge-danger">HTML</span>
            <span className="badge badge-primary">CSS</span>
            <span className="badge badge-success">Git</span>
          </div>
        </div> {/* sidebar end */}
      </div>   {/* row end */}
      {/* container end */}
    </div>
  );
}






export default Container;