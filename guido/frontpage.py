#!/usr/bin/env python3

from bottle import template
from bottle import route

def frontpage():
    return template("frontpage")

def cow():
    return template("cow")

def pig():
    return template("pig")

def dog():
	return template("dog")
	
