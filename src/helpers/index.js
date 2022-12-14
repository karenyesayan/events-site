// import { addEventToUser, } from "../redux/slices/userSlice";
// import { selectEvent } from "../redux/slices/eventSlice";


export const hash = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(2);

// export const navigateToTicket = (activeEvent) => { 
//         if (id) {
            
//             const body = { selectedEvents: [activeEvent, ...selectedEvents]};
//             instance.patch(`users/${id}/`, body);
//             dispatch(selectEvent(activeEvent));
//             dispatch(addEventToUser(activeEvent));
//             navigate("/ticket");
//         } else { navigate("/myaccount") }
//     };