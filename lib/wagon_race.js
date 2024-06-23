const moveForward = (player) => {
  const wagon = document.querySelector(`#player${player}-race .active`);
  if (wagon.nextElementSibling) {
    wagon.nextElementSibling.classList.add('active');
    wagon.classList.remove('active');
  } else {
    // alert(`Player ${player} wins! Play again?`);
    Swal.fire({
      title: `Player ${player} wins! Play again?`,
      width: 800,
      padding: "4em",
      color: "#F5FD1C",
      background: "#fff url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTI0aTRrcGk2M2JheGRlZnEyaDdkYXJxZWlscDVoODFhNjFjaDVtZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oI9JBnChEnNcFsCac/giphy.gif)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTI0aTRrcGk2M2JheGRlZnEyaDdkYXJxZWlscDVoODFhNjFjaDVtZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oI9JBnChEnNcFsCac/giphy.gif)
        left top
        no-repeat
      `,
      showCancelButton: true,
      confirmButtonText: 'Yes, play again',
      cancelButtonText: 'No, thanks'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  }
};

const moveWagons = (event) => {
  if (event.key === "q") {
    moveForward(1);
  } else if (event.key === "p") {
    moveForward(2);
  }
};


document.addEventListener("keyup", moveWagons);
