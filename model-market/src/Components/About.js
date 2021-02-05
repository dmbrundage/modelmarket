if (card['faces'].length <= 5 ) {
    {card['faces'].map(face => (
      <Avatar className={classes.avatar} key={face} src={face} style={{ height: '30px', width: '30px' }} />
    ))}
} else {
//  block of code to be executed if the condition is false
}