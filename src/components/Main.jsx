import { useState } from "react"
import axios from "axios";

const Main = () => {

   const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false,
  });

  const handleFormData = (e) => {

    setFormData({ ...formData, [e.target.name] : e.target.value });

  };

  const  handleSubmit = (e) => {
     e.preventDefault();
     axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts" , formData)
     .then((resp) =>{
      console.log("Dati inviati con successo :", resp.data);
     });
  };



  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Crea un nuovo post</h2>
        </div>
       <div className="row">
        <form onSubmit={handleSubmit}>
          <div className="col-12 my-3">
            <input 
             className="form-control"
              type="text"
              name="author"
              value={formData.author}
              onChange={handleFormData}
              placeholder="inserisci l'autore del nuovo post"
             />
          </div>
          <div className="col-12 my-3">
            <input 
              className="form-control"
               type="text"
               name="title"
               value={formData.title}
               onChange={handleFormData}
               placeholder="inserisci il titolo del nuovo post"
            />
          </div>
          <div className="col-12 my-3">
            <textarea 
            className="form-control"
            name="body"
            value={formData.body}
            onChange={handleFormData}
            placeholder="inserisci il testo del nuovo post"
            />
          </div>
           <select 
            className="form-select"
            name="public"
            value={formData.public}
            onChange={handleFormData}
            >
            <option value="">scegli un opzione</option>
            <option value ="true">post pubblico</option>
            <option value="false">post privato</option>
           </select>
           <div className="col-12 mt-3">
             <button className="btn btn-primary" type="submit">invia post</button>
           </div>
        </form>
       </div>
      </div>
    </div>
  )
}

export default Main
