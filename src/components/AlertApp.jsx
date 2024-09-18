import { AlertComponent } from "./AlertComponent"

export function AlertApp() {
    return (
        <>
            <AlertComponent type={"danger"} message={'Great success'} />
            <AlertComponent type={"warning"} message={'We have a problem'} delay={true} />
        </>
    )
}