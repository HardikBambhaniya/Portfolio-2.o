import { Typewriter } from "@/components/ui/typewriter"

function Preview() {
  return (
    
        <Typewriter
          text={[
            "Frontend Developer",
            "Mern Stack Developer",
          ]}
          speed={70}
          className="text-teal-500"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"_"}
        />
      
  )
}

export { Preview }