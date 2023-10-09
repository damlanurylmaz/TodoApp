import styled from "@emotion/styled";

export const CreateTodoWrapper = styled.div`
    padding: 30px;
`;

export const StatusWrapper = styled.div`
    display: flex;
    padding: 10px 30px;
    gap: 40px;
    .button {
        background-color: pink;
        border-radius: 10px;
        .MuiButtonBase-root {
            color: #ffffff;
        }
    }
`;

export const TodosWrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Todo = styled.div`
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .MuiTypography-root {
        text-decoration: ${(props) => props.checked ? 'line-through' : 'none'};
    }
    .deleteButton {
        color: #f46267;
    }
`;