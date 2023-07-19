type GreetingProps = {
    name:string
    messageCount?: number
    isLoggedIN : boolean
}

const Greeting = (props:GreetingProps) => {
    const {messageCount = 0} = props
  return (
    <div>
        <h2>
            {props.isLoggedIN
            ? `Welcome ${props.name}! You have ${props.messageCount} unread message`
            : `Welcome Guest`
            }
        </h2>
    </div>
  )
}

export default Greeting