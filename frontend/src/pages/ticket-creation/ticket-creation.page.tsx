import {
    Suspense,
    useEffect, useState
} from "react";
import { CustomInput } from "../../components/input/Input.component";
import { PageTitle } from "../../index.styles";
import { FormContainer, PageContainer, StatusContainer, StatusIcon, StatusInput, StatusItem } from "./ticket-creation.styles";
import { GoDotFill } from "react-icons/go";
import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
type Priority = {
    color: string;
    status: string;
};
const TicketCreationPage = () => {

    const [priority, setPriority] = useState('Minor');
    const [priorityColor, setPriorityColor] = useState('#008200');
    const [priorityIsRunning, setPriorityIsRunning] = useState(false);

    const priorities: Priority[] = [
        {
            color: '#ED363A',
            status: 'Blocker',
        },
        {
            color: '#F8F0A7',
            status: 'Major',
        },
        {
            color: '#008200',
            status: 'Minor',
        },
    ];
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            const customInputForm =
                document.querySelector('.custom-input-form');
            if (customInputForm && !customInputForm.contains(event.target)) {
                setPriorityIsRunning(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    const navigate = useNavigate();
    return (<PageContainer>
        <PageTitle size='md' className={'text-left'} >
            Incident Request
        </PageTitle>
        <hr className="w-[100%] bg-[var(--slate-300)]" />
        <FormContainer>
            <div className="flex gap-4 w-[100%] justify-between ">
                <CustomInput
                    required
                    label="Title"
                    pattern="^[a-zA-Z0-9 ]{3,20}$"
                    title="Between 3 and 20 characters long, contains letters, numbers, and spaces."

                />
                <CustomInput
                    required
                    label="Project Name"
                    pattern="^[a-zA-Z0-9 ]{3,20}$"
                    title="Between 3 and 20 characters long, contains letters, numbers, and spaces."
                />
            </div>
            <div className="w-full relative">
                <StatusIcon size={24} color={priorityColor} />
                <StatusInput
                    required
                    color={priorityColor}
                    label="Priority"
                    type="text"
                    className="custom-input-form"
                    value={priority}
                    onClick={() => {
                        setPriorityIsRunning(true);
                    }}
                />
                {priorityIsRunning && (
                    <StatusContainer>
                        {priorities.map((status) => (
                            <StatusItem
                                onClick={() => {
                                    setPriority(status.status);
                                    setPriorityColor(status.color);
                                }}
                            >
                                <GoDotFill
                                    size={24}
                                    color={status.color}
                                />
                                <span>{status.status}</span>
                            </StatusItem>
                        ))}
                    </StatusContainer>
                )}
            </div>
            <div className="w-[100%]">
                <CustomInput
                    label="Description"
                    // value={description}
                    // onChange={(e: { target: { value: any } }) =>
                    //     setDescription(e.target.value)
                    // }
                    multiline="true"
                    placeholder="Enter description..."
                    maxLength={1000}
                    cols={33}
                    rows={5}
                />
            </div>
            <div className="flex gap-4 w-[100%] justify-between ">
                <CustomInput
                    label="Parent ticket  (optional)"
                />
                <CustomInput
                    label="Request participants  (optional)"
                />
            </div>
            <div className="flex justify-end items-end gap-2 pt-8 ">
                <Button
                    select="danger"
                    outline={true}
                    className="w-1/7 border-none!"
                    onClick={() => navigate('/board')}>
                    Cancel
                </Button>
                <Button
                    className="w-1/7 "
                >Create</Button>
            </div>
        </FormContainer>

    </PageContainer>)
}
export default TicketCreationPage;