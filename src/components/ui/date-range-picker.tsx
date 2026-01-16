import * as React from "react";
import { format, startOfMonth, endOfMonth } from "date-fns";
import { ChevronDown } from "lucide-react";
import type { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function DateRangePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const today = new Date();
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: startOfMonth(today),
    to: endOfMonth(today),
  });
  const [isOpen, setIsOpen] = React.useState(false);
  const [monthFrom, setMonthFrom] = React.useState<Date | undefined>(
    date?.from
  );
  const [yearFrom, setYearFrom] = React.useState<number | undefined>(
    date?.from?.getFullYear()
  );

  const years = Array.from(
    { length: 11 },
    (_, i) => today.getFullYear() - 5 + i
  );

  const handleDateSelect = (range: DateRange | undefined) => {
    if (!range) {
      setDate(undefined);
      return;
    }

    setDate(range);

    if (range.from) {
      setMonthFrom(range.from);
      setYearFrom(range.from.getFullYear());
    }
  };

  const handleMonthChange = (newMonthIndex: number) => {
    if (yearFrom !== undefined) {
      const newMonth = new Date(yearFrom, newMonthIndex, 1);
      setMonthFrom(newMonth);
    }
  };

  const handleYearChange = (newYear: number) => {
    if (years.includes(newYear)) {
      const newMonth = monthFrom
        ? new Date(newYear, monthFrom.getMonth(), 1)
        : new Date(newYear, 0, 1);
      setYearFrom(newYear);
      setMonthFrom(newMonth);
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "h-8 shadow-none border-solid gap-2 bg-white rounded-full border border-border/40 text-xs font-medium px-3 flex-shrink-0 w-auto justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="text-foreground">
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL d")} - {format(date.to, "LLL d")}
                  </>
                ) : (
                  format(date.from, "LLL d")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </span>
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 max-w-none" align="end">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 p-3 pb-0">
                <Select
                  onValueChange={(value) => {
                    handleMonthChange(months.indexOf(value));
                  }}
                  value={monthFrom ? months[monthFrom.getMonth()] : undefined}
                >
                  <SelectTrigger className="w-[130px] h-8 text-xs focus:ring-0 focus:ring-offset-0 font-medium">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month, idx) => (
                      <SelectItem key={idx} value={month} className="text-xs">
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  onValueChange={(value) => {
                    handleYearChange(Number(value));
                  }}
                  value={yearFrom ? yearFrom.toString() : undefined}
                >
                  <SelectTrigger className="w-[100px] h-8 text-xs focus:ring-0 focus:ring-offset-0 font-medium">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year, idx) => (
                      <SelectItem
                        key={idx}
                        value={year.toString()}
                        className="text-xs"
                      >
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                month={monthFrom}
                onMonthChange={setMonthChange}
                selected={date}
                onSelect={handleDateSelect}
                numberOfMonths={2}
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );

  function setMonthChange(month: Date) {
    setMonthFrom(month);
  }
}
