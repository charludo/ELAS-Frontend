import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {TimeTable, FilterGroup } from "./Components/Components.js"
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const backgroundStyles = makeStyles({
    lecEx: {
        backgroundColor: "#90EE90"
    },
    lecture: {
        backgroundColor: "#B0E0E6"
    },
    seminar: {
        backgroundColor: "#FFDAB9"
    },
    block: {
        backgroundColor: "#FA8072"
    },
    elearn: {
        backgroundColor: "#D8BFD8"
    }
});

export default function Filters(props) {
    const classes = backgroundStyles();
    return (
      <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
        <TimeTable action={props.action} />
        <FilterGroup
            action={props.action}
            groupLabel={"Location"}
            filters={[
                {
                    label: "Essen",
                    arguments: [
                        ["locales", "Essen"],
                        ["locales", "Essen (UKE)"]
                    ]
                },
                {
                    label: "Duisburg",
                    arguments: [
                        ["locales", "Duisburg"],
                        ["locales", "Duisburg (B)"],
                        ["locales", "Duisburg (L/M)"]
                    ]
                },
                {
                    label: "Bochum",
                    arguments: [["locales", "Bochum"]]
                },
                {
                    label: "Dortmund",
                    arguments: [["locales", "Dortmund"]]
                },
            ]}
        />
        <FilterGroup
            action={props.action}
            groupLabel={"Exam"}
            filters={[
                {
                    label: "Written",
                    arguments: [["exam", "Klausur"]]
                },
                {
                    label: "Oral",
                    arguments: [["exam", "Mündliche Prüfung"]]
                },
                {
                    label: "Essay",
                    arguments: [
                        ["exam", "Essay"],
                        ["exam", "Schriftliche Ausarbeitung"]
                    ]
                },
                {
                    label: "Presentation",
                    arguments: [["exam", "Präsentation"]]
                },
            ]}
        />
        <FilterGroup
            action={props.action}
            groupLabel={"Language"}
            filters={[
                {
                    label: "German",
                    arguments: [["languages", "Deutsch"]]
                },
                {
                    label: "English",
                    arguments: [["languages", "Englisch"]]
                },
                {
                    label: "Turkish",
                    arguments: [["languages", "Türkisch"]]
                },
                {
                    label: "Dutch",
                    arguments: [["languages", "Niederländisch"]]
                },
            ]}
        />
        <FilterGroup
            action={props.action}
            groupLabel={"Course Type"}
            filters={[
                {
                    label: "Lecture + Exercise",
                    arguments: [["courseType", "VL/Übung"]],
                    classes: classes.lecEx
                },
                {
                    label: "Lecture",
                    arguments: [["courseType", "Vorlesung"]],
                    classes: classes.lecture
                },
                {
                    label: "Seminar",
                    arguments: [["courseType", "Seminar"]],
                    classes: classes.seminar
                },
                {
                    label: "Blocked Seminar",
                    arguments: [["courseType", "Blockseminar"]],
                    classes: classes.block
                },
                {
                    label: "E-Learning",
                    arguments: [["courseType", "E-Learning"]],
                    classes: classes.elearn
                },
            ]}
        />
    </Grid>
  );
}
