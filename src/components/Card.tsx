
import * as React from "react"
import { Calendar, MoreHorizontal, Tags, Trash, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const labels = [
  "feature",
  "bug",
  "enhancement",
  "documentation",
  "design",
  "question",
  "maintenance",
]

export function ComboboxDropdownMenu(props:any) {
 const {task,deleteTask,toggleTaskDone} = props;
 

  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center max-w-sm dark text-white mb-5">
      <p className="text-sm font-medium leading-none dark ">
      
        <span className={ task.isDone?`line-through me-3`:`dark me-3`} >{task.text} </span> {task.isDone && <> (done)</>}
      </p>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuGroup>
           
            <DropdownMenuItem  onClick={()=>{
                toggleTaskDone(task.id);
                console.log("task",task);
              }}>
              <Calendar className="mr-2 h-4 w-4" />
              {task.isDone?"Mark as undone":"Mark as done"}
           
            </DropdownMenuItem>
           
            <DropdownMenuItem className="text-red-600" onClick={()=>{
                deleteTask(task.id);
            }}>
              <Trash className="mr-2 h-4 w-4" />
              Delete
              <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
