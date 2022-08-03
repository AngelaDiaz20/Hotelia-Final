import styled, {css} from 'styled-components';

const colores = { 
	error: "#bb2929",
	exito: "#1ed12d"
}

const ContainerForm = styled.section`
	border: 3px solid var(--blue-light);
	max-width: 1100px;
	display:flex;
	flex-direction:column;
	align-items:center;
	backdrop-filter:blur(3px);
	margin:auto;
	padding: 10px 30px;
	border-radius:5px;
	box-shadow:3px 3px 3px rgba(0,0,0,0.4), -3px -3px 3px rgba(0,0,0,0.4);
	background-color: rgba(255, 255, 255, 0.65);

	@media (max-width: 1200px){
		width:95%;
	}
`;

const Formulario = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin: auto;
    padding: 10px 30px;
	gap: 20px;
	@media (max-width: 800px){
		grid-template-columns: 1fr;
	}
`;

const Label = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px 10px 0;
	min-height: 20px;
	cursor: pointer;
	${props => props.valido === 'false' && css`
		color: ${colores.error};
	`}
`;

const GrupoInput = styled.div`
	position: relative;
	z-index: 90;
    width:100%;
`;

const GrupoCheckbox = styled.div`
	display:flex;
	justify-content:space-around;
    align-items:center;
	margin:5px 10px;
`;

const Input = styled.input`
	width: 100%;
	border-radius: 3px;
	height: 35px;
	line-height: 45px; 
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border:  1px solid transparent;
    box-shadow: 2px 2px 3px rgba(0,0,0, 0.2);
	&:focus {
		border: 1px solid var(--negro);
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}
	${props => props.valido === 'true' && css`
		border: 1px solid transparent;
	`}
	${props => props.valido === 'false' && css`
		border: 1px solid ${colores.error} !important;
	`}
`;

const Textarea = styled.textarea`
	width: 100%;
	border-radius: 3px;
	rows:3;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border:  1px solid transparent;
    box-shadow: 2px 2px 3px rgba(0,0,0, 0.2);
	&:focus {
		border: 1px solid var(--negro);
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}
	${props => props.valido === 'true' && css`
		border: 1px solid transparent;
	`}
	${props => props.valido === 'false' && css`
		border: 1px solid ${colores.error} !important;
	`}
`;

const LeyendaError = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;
	${props => props.valido === 'true' && css`
		display: none;
	`}
	${props => props.valido === 'false' && css`
		display: block;
	`}
`;


const ContenedorTerminos = styled.div`
	grid-column: span 2;
	input {
		margin-right: 10px;
	}
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const ContenedorBotonCentrado = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const Boton = styled.button`
	height: 45px;
	line-height: 45px;
	width: 30%;
	background: #000;
	color: #fff;
	font-weight: bold;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	transition: .1s ease all;
	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
	}
`;

const MensajeExito = styled.p`
	font-size: 14px;
	color: ${colores.exito};
`;

const MensajeError = styled.div`
	height: 45px;
	line-height: 45px;
	background: #F66060;
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}
`;


const Ocult = styled.div`
	display:none;
`;


export {
	ContainerForm,
	Formulario,
	Label,
	GrupoInput,
    GrupoCheckbox,
	Input,
    Textarea,
	LeyendaError,
	ContenedorTerminos,
	ContenedorBotonCentrado,
	Boton,
	MensajeExito,
	MensajeError,
	Ocult
};