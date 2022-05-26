import { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const defaultFormData = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  }

  const [formData, setFormData] = useState(defaultFormData)


  const updateFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPokemon = {
      name: formData.name,
      hp: parseFloat(formData.hp),
      sprites: {
        front: formData.frontUrl,
        back:formData.backUrl
      }
    }

    const postConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    };
  

    fetch('http://localhost:3001/pokemon', postConfig)
      .then(res => res.json())
      .then((newPokemon =>{
        onAddPokemon(newPokemon);
        setFormData(defaultFormData);
      }))
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal" onChange={updateFormData}>
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl" value={formData.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl" value={formData.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div >
  );
}

export default PokemonForm;
