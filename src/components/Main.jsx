import { useState } from "react"

const Main = () => {

   const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false,
  });


  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Crea un nuovo post</h2>
        </div>
       <div className="row">
        <form>
          <div className="col-12 my-3">
            <input 
             className="form-control"
              type="text"
              name="author"
              placeholder="inserisci l'autore del nuovo post"
             />
          </div>
          <div className="col-12 my-3">
            <input 
              className="form-control"
               type="text"
               name="title"
               placeholder="inserisci il titolo del nuovo post"
            />
          </div>
          <div className="col-12 my-3">
            <input 
            className="form-control"
            type="textarea"
            name="body"
            placeholder="inserisci il testo del nuovo post"
            />
          </div>
           <select className="form-select" name="public">
            <option value="">scegli un opzione</option>
            <option value="true">post pubblico</option>
            <option value="false">post privato</option>
           </select>
           <div class="col-12 mt-3">
             <button class="btn btn-primary" type="submit">invia post</button>
           </div>
        </form>
       </div>
      </div>
    </div>
  )
}

export default Main
