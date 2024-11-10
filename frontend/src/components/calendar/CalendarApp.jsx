import { useState, useEffect } from "react";
import "./CalendarApp.css";
import { Icon } from "@chakra-ui/react";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { HiPencilAlt } from "react-icons/hi";
import { HiOutlineMinusCircle } from "react-icons/hi";

const CalendarApp = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
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

  const currentDate = new Date();

  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventTime, setEventTime] = useState({ hours: "00", minutes: "00" });
  const [eventText, setEventText] = useState("");
  const [editingEvent, setEditingEvent] = useState(null);
  const baseUrl = "tomotech.onrender.com";
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`http://${baseUrl}/events`);
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchEvents();
  }, []);

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevYear) =>
      currentMonth === 0 ? prevYear - 1 : prevYear
    );
  };
  const nextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear((prevYear) =>
      currentMonth === 11 ? prevYear + 1 : prevYear
    );
    origins = [
        "http://localhost.tiangolo.com",
        "https://localhost.tiangolo.com",
        "http://localhost",
        "http://localhost:8080",
    ]
  };

  const handleDayClick = (day) => {
    const clickedDate = new Date(currentYear, currentMonth, day);
    const today = new Date();

    if (clickedDate >= today || isSameDate(clickedDate, today)) {
      setSelectedDate(clickedDate);
      setShowEventPopup(true);
      setEventTime({ hours: "00", minutes: "00" });
      setEventText("");
      setEditingEvent(null);
    }
  };

  const isSameDate = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const handleEventSubmit = async () => {
    const newEvent = {
      id: editingEvent ? editingEvent.id : events.length + 1,
      description: eventText,
      date: {
        year: selectedDate.getFullYear(),
        month: selectedDate.getMonth(),
        day: selectedDate.getDate(),
      },
      end_time: `${eventTime.hours.padStart(2, "0")}:${eventTime.minutes.padStart(
        2,
        "0"
      )}`,
    };

    let updatedEvents = [...events];

    if (editingEvent) {
      updatedEvents = updatedEvents.map((event) =>
        event.id === editingEvent.id ? newEvent : event
      );
    } else {
      updatedEvents.push(newEvent);
    }

    setEvents(updatedEvents);
    setEventTime({ hours: "00", minutes: "00" });
    setEventText("");
    setShowEventPopup(false);
    setEditingEvent(null);

    try {
      const res = await fetch(`http://${baseUrl}:8000/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (!res.ok) {
        throw new Error("Failed to add event");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditEvent = async (event) => {
    setEventTime({
      hours: event.end_time.split(":")[0],
      minutes: event.end_time.split(":")[1],
    });
    setEventText(event.description);
    setEditingEvent(event);
    setShowEventPopup(true);
    
    try {
      const response = await fetch(`http://${baseUrl}:8000/events/${event.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
      if (!response.ok) {
        throw new Error('failed to update :(')
      }
      const updatedEvent = await response.json();
      setEvents((prevEvents) => prevEvents.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt)));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
    try {
      const response = await fetch(`http://${baseUrl}:8000/events/${eventId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete event");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleTimeChange = (e) => {
    const { name, value } = e.target;

    setEventTime((prevTime) => ({
      ...prevTime,
      [name]: value.padStart(2, "0"),
    }));
  };
  return (
    <div className="calendar-app">
      <div className="calendar">
        <h1 className="heading">Calendar</h1>
        <div className="navigate-date">
          <h2 className="month">{monthsOfYear[currentMonth]}</h2>
          <h2 className="year">{currentYear}</h2>
          <div className="buttons">
            <button className="prev-month" onClick={prevMonth}>
              <Icon as={HiChevronLeft} className="icon" />
            </button>
            <button className="next-month" onClick={nextMonth}>
              <Icon as={HiChevronRight} className="icon" />
            </button>
          </div>
        </div>
        <div className="daysofweek">
          {daysOfWeek.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className="dates">
          {[...Array(firstDayOfMonth).keys()].map((_, index) => (
            <span key={`empty-${index}`}></span>
          ))}
          {[...Array(daysInMonth).keys()].map((day) => (
            <span
              key={day + 1}
              className={
                day + 1 === currentDate.getDate() &&
                currentMonth === currentDate.getMonth() &&
                currentYear === currentDate.getFullYear()
                  ? "current-date"
                  : ""
              }
              onClick={() => handleDayClick(day + 1)}
            >
              {day + 1}
            </span>
          ))}
        </div>
      </div>
      <div className="events">
        {events.map((event, index) => (
          <div className="event" key={index}>
            <div className="event-date-wrapper">
              <div className="event-date">{`${
                monthsOfYear[event.date.month]
              } ${event.date.day}, ${event.date.year}`}</div>
              <div className="event-time">{event.end_time}</div>
            </div>
            <div className="event-text">{event.description}</div>
            <div className="event-buttons">
              <button
                className="edit-event"
                onClick={() => handleEditEvent(event)}
              >
                <Icon as={HiPencilAlt} className="icon" />
              </button>
              <button
                className="delete-event"
                onClick={() => handleDeleteEvent(event.id)}
              >
                <Icon as={HiOutlineMinusCircle} className="icon" />
              </button>
            </div>
          </div>
        ))}
        {showEventPopup && (
          <div className="event-popup">
            <div className="time-input">
              <div className="event-popup-time">Time</div>
              <input
                type="number"
                name="hours"
                min={0}
                max={23}
                className="hours"
                value={eventTime.hours}
                onChange={handleTimeChange}
              />
              <input
                type="number"
                name="minutes"
                min={0}
                max={59}
                className="minutes"
                value={eventTime.minutes}
                onChange={handleTimeChange
                }
              />
            </div>
            <textarea
              placeholder="Enter Event Text (Max 50 Characters)"
              value={eventText}
              onChange={(e) => {
                if (e.target.value.length <= 50) {
                  setEventText(e.target.value);
                }
              }}
            />
            <button className="event-popup-btn" onClick={handleEventSubmit}>
              {editingEvent ? "Update Event" : "Add Event"}
            </button>
            <button
              className="close-event-popup"
              onClick={() => setShowEventPopup(false)}
            >
              <Icon as={HiOutlineX} className="icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarApp;