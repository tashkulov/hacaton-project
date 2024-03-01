import { Button } from '@mui/material';

const MyButton = ({ text }) => {
    return (
        <Button variant={"contained"}>{text}</Button>
    );
};

export default MyButton;
