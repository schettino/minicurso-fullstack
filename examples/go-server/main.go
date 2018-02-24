package main

import (
	"net/http"

	"github.com/labstack/echo"
)

func main() {
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		c.JSON(http.StatusOK, map[string]string{
			"message": "Hello full stackers!!!!",
		})
		return nil
	})
	e.Start(":4040")
}
