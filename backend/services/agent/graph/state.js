import { Annotation } from "@langchain/core"

export const agentState=Annotation.Root({
    prompt:Annotation(), 
    aiResponse: Annotation(),
    agent:Annotation()
})