import {
    IconButton,
    Box,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    tableCellClasses,
    Paper,
    TableBody,
} from '@mui/material';

import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { setShowModal, Task } from '../../../../store/tasksSlice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';

type Rowsprops = {
    id: number;
    index: number;
    title: string;
    description: string;
    data: Date;
    key: string;
    actionRender: JSX.Element;
};
type Props = {
    data: Task[];
};
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

function ListTask(props: Props) {
    const dispatch = useDispatch();
    const [rows, setRows] = useState<Array<Rowsprops>>([]);
    const columns = [
        {
            field: 'index',
            headerName: 'Nº',
            width: 50,
        },
        {
            field: 'title',
            headerName: 'Title',
            width: 50,
        },
        {
            field: 'description',
            headerName: 'Description',
        },
        {
            field: 'date',
            headerName: 'Date',
        },
        {
            field: 'actions',
            headerName: 'Actions',
            renderCell: (params: GridRenderCellParams) => (
                <Box>
                    <IconButton onClick={() => handleUpdate(params.row.key)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(params.row.key)}>
                        <DeleteForeverIcon />
                    </IconButton>
                </Box>
            ),
        },
    ];

    useEffect(() => {
        if (props.data.length) {
            const rowsFormat = props.data.map((item, id) => {
                return {
                    id,
                    index: id + 1,
                    title: item.title,
                    description: item.description,
                    data: item.date,
                    key: item.id,
                    actionRender: (
                        <Box>
                            <IconButton onClick={() => handleUpdate(item.id)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => handleDelete(item.id)}>
                                <DeleteForeverIcon />
                            </IconButton>
                        </Box>
                    ),
                };
            });
            setRows(rowsFormat);
        }
    }, [props.data]);

    const handleUpdate = (identificador: string) => {
        dispatch(setShowModal({ open: true, type: 'Update Task', id: identificador }));
    };
    const handleDelete = (identificador: string) => {
        dispatch(setShowModal({ open: true, type: 'Delete Task', id: identificador }));
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Nº</StyledTableCell>
                        <StyledTableCell align="right">Title</StyledTableCell>
                        <StyledTableCell align="right">Description</StyledTableCell>
                        <StyledTableCell align="right">Date</StyledTableCell>
                        <StyledTableCell align="right">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.key}>
                            <StyledTableCell component="th" scope="row">
                                {row.index}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.title}</StyledTableCell>
                            <StyledTableCell align="right">{row.description}</StyledTableCell>
                            <StyledTableCell align="right">{String(row.data)}</StyledTableCell>
                            <StyledTableCell align="right">{row.actionRender}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default ListTask;
