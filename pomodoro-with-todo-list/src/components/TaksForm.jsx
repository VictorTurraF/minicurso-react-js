import React, { useState } from 'react';
import { Input } from '../layouts/Input';
import { styled } from '@stitches/react';
import { Row } from '../layouts/Row';
import { Button } from '../layouts/Button';

const Container = styled('div', {
  width: "400px"
})

const InputRow = styled(Row, {
  alignItems: 'center'
})

const Form = styled('form', {
  display: 'flex',
  flexDirection: "column",
  gap: "1rem"
})

const NumberInput = styled(Input, {
  width: "5rem",
})

function TaskForm({ onClose, onSubmit }) {
  const [description, setDescription] = useState('');
  const [estimatedPomodoros, setEstimatedPomodoros] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      event, form: {
        description,
        estimatedPomodoros
      }
    });
    onClose();
  };

  return (
    <Container>
      <h2 style={{ marginBottom: "1.5rem" }}>Nova Tarefa</h2>
      <Form onSubmit={handleSubmit}>
        <InputRow>
          <label>Descrição:</label>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputRow>
        <InputRow>
          <label>Qtd de pomodoros:</label>
          <NumberInput
            type="number"
            value={estimatedPomodoros}
            onChange={(e) => setEstimatedPomodoros(e.target.value)}
          />
        </InputRow>
        <Row style={{ marginTop: "1rem" }}>
          <Button type="button">Criar Tarefa</Button>
          <Button variant="secondary" type="button" onClick={onClose}>Cancelar</Button>
        </Row>
      </Form>
    </Container>
  );
}

export default TaskForm;
