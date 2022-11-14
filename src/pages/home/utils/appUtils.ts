import { Task } from '../../../store/tasksSlice';

export const findTaskById = (id: string, data: Task[]): Task => {
    const search = data.find((task) => task.id === id);
    if (!search) {
        throw new Error('not found task');
    }
    return search;
};
export const updateTaskById = ({
    id,
    _title,
    _description,
    data,
}: {
    id: string;
    _title: string;
    _description: string;
    data: Task[];
}): Task[] => {
    console.log(id + _title + _description);

    data.forEach((task) => {
        if (task.id === id) {
            task.title = _title;
            task.description = _description;
            task.date = new Date();
        }
    });

    return data;
};
export const deleteTaskById = (id: string, data: Task[]): Task[] => {
    const modified = data.filter((task) => task.id !== id);

    return modified;
};
