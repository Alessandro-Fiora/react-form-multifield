import { useState } from "react";
const defaultFormData = {
  title: "",
  content: "",
  img: "",
  author: "",
  category: "",
  published: false,
};

function App() {
  const categories = ["HTML", "CSS", "JS"];

  const [articles, setArticles] = useState([
    {
      title: "Articolo 1",
      content: "Lorem ipsum dolor sit amet",
      img: "https://placehold.co/600x400",
      author: "Alessandro Fiora",
      category: "HTML",
      published: true,
    },
    {
      title: "Articolo 2",
      content: "Lorem ipsum dolor sit amet",
      img: "https://placehold.co/600x400",
      author: "Alessandro Fiora",
      category: "CSS",
      published: false,
    },
    {
      title: "Articolo 3",
      content: "Lorem ipsum dolor sit amet",
      img: "https://placehold.co/600x400",
      author: "Alessandro Fiora",
      category: "JS",
      published: false,
    },
  ]);

  const [formData, setFormData] = useState(defaultFormData);

  const handleFormData = (e) => {
    const newValue =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: newValue,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newArticles = [
      ...articles,
      {
        title: formData.title,
        content: formData.content,
        img: formData.img,
        author: formData.author,
        category: formData.category,
        published: formData.published,
      },
    ];
    setArticles(newArticles);
    setFormData(defaultFormData);
  };

  const handleDeleteButtonClick = (index) => {
    const newArticles = [...articles];
    newArticles.splice(index, 1);
    setArticles(newArticles);
  };

  return (
    <>
      <div className="container p-5">
        <h1 className="mb-4">Aggiungi articoli</h1>
        <form onSubmit={handleFormSubmit} className="my-3">
          <label htmlFor="title-input" className="form-label">
            Inserisci il titolo dell'articolo:
          </label>
          <input
            id="title-input"
            onChange={handleFormData}
            value={formData.title}
            className="form-control my-3"
            type="text"
            name="title"
          />
          <label htmlFor="author-input" className="form-label">
            Inserisci l'autore dell'articolo:
          </label>
          <input
            id="author-input"
            onChange={handleFormData}
            value={formData.author}
            className="form-control my-3"
            type="text"
            name="author"
          />

          <label htmlFor="content-input" className="form-label">
            Inserisci il contenuto dell'articolo:
          </label>
          <input
            id="content-input"
            onChange={handleFormData}
            value={formData.content}
            className="form-control my-3"
            type="text"
            name="content"
          />

          <label htmlFor="img-input" className="form-label">
            Inserisci l'immagine dell'articolo:
          </label>
          <input
            id="img-input"
            onChange={handleFormData}
            value={formData.img}
            className="form-control my-3"
            type="text"
            name="img"
          />

          <label htmlFor="category-select" className="form-label">
            Scegli la categoria dell'articolo:
          </label>
          <select
            onChange={handleFormData}
            id="category-select"
            className="form-select my-3"
            name="category"
            placeholder="Seleziona una categoria"
          >
            <option>Seleziona una categoria</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <label htmlFor="published-input" className="form-label">
            Vuoi pubblicare l'articolo?
          </label>
          <input
            id="published-input"
            onChange={handleFormData}
            value={formData.published}
            className="mx-3"
            type="checkbox"
            name="published"
          />

          <button className="d-block btn btn-primary my-3">
            Aggiungi articolo
          </button>
        </form>

        <div className="article-list-container">
          <h2 className="my-3">Lista articoli:</h2>
          <ul>
            {articles.map(
              (article, index) =>
                article.title && (
                  <li key={index}>
                    <div className="d-flex">
                      <div className="article-info flex-grow-1">
                        <h3 className="h5">{article.title}</h3>
                        <div className="img-container">
                          <img
                            src={article.img}
                            alt=""
                            className="img img-fluid"
                          />
                        </div>
                        <h4 className="h6 fw-normal">
                          {article.author ? "Autore: " + article.author : ""}
                        </h4>
                        <h4 className="h6 fw-light">
                          {article.content
                            ? "Contenuto articolo: " + article.content
                            : ""}
                        </h4>
                        <h4 className="h6 fw-light">
                          {article.category
                            ? "Categoria articolo: " + article.category
                            : ""}
                        </h4>
                        <h4 className="h6 fw-light">
                          {article.published ? "Pubblicato" : "Bozza"}
                        </h4>
                      </div>
                      <div className="article-buttons">
                        <button
                          onClick={() => {
                            handleDeleteButtonClick(index);
                          }}
                          className="btn p-0 mx-3"
                        >
                          <i className="mx-3 fa-solid fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
