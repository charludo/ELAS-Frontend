import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {TimeTable, FilterGroup, VerticalFilterGroup } from "./Components/Components.js"
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Credits from "./Credits.jsx";
import SearchBar from "material-ui-search-bar";

export default function Filters(props) {
    const classes = backgroundStyles();
    return (
      <Grid container direction="row" justify="space-evenly" alignItems="flex-start" spacing="6">
        <TimeTable action={props.action} filterState={props.filterState}/>
        <FilterGroup
            action={props.action}
            groupLabel={"Location"}
            filters={[
                {
                    label: "Essen",
                    checked: props.filterState.locales.Essen,
                    arguments: [
                        ["locales", "Essen"],
                        ["locales", "Essen (UKE)"]
                    ]
                },
                {
                    label: "Duisburg",
                    checked: props.filterState.locales.Duisburg,
                    arguments: [
                        ["locales", "Duisburg"],
                        ["locales", "Duisburg (B)"],
                        ["locales", "Duisburg (L/M)"]
                    ]
                },
                {
                    label: "Bochum",
                    checked: props.filterState.locales.Bochum,
                    arguments: [["locales", "Bochum"]]
                },
                {
                    label: "Dortmund",
                    checked: props.filterState.locales.Dortmund,
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
                    checked: props.filterState.exam["Klausur"],
                    arguments: [["exam", "Klausur"]]
                },
                {
                    label: "Oral",
                    checked: props.filterState.exam["Mündliche Prüfung"],
                    arguments: [["exam", "Mündliche Prüfung"]]
                },
                {
                    label: "Essay",
                    checked: props.filterState.exam["Essay"],
                    arguments: [
                        ["exam", "Essay"],
                        ["exam", "Schriftliche Ausarbeitung"]
                    ]
                },
                {
                    label: "Presentation",
                    checked: props.filterState.exam["Präsentation"],
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
                    checked: props.filterState.languages["Deutsch"],
                    arguments: [["languages", "Deutsch"]]
                },
                {
                    label: "English",
                    checked: props.filterState.languages["Englisch"],
                    arguments: [["languages", "Englisch"]]
                },
                {
                    label: "Turkish",
                    checked: props.filterState.languages["Türkisch"],
                    arguments: [["languages", "Türkisch"]]
                },
                {
                    label: "Dutch",
                    checked: props.filterState.languages["Niederländisch"],
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
                    checked: props.filterState.courseType["VL/Übung"],
                    arguments: [["courseType", "VL/Übung"]],
                    classes: classes.lecEx
                },
                {
                    label: "Lecture",
                    checked: props.filterState.courseType["Vorlesung"],
                    arguments: [["courseType", "Vorlesung"]],
                    classes: classes.lecture
                },
                {
                    label: "Seminar",
                    checked: props.filterState.courseType["Seminar"],
                    arguments: [["courseType", "Seminar"]],
                    classes: classes.seminar
                },
                {
                    label: "Blocked Seminar",
                    checked: props.filterState.courseType["Blockseminar"],
                    arguments: [["courseType", "Blockseminar"]],
                    classes: classes.block
                },
                {
                    label: "E-Learning",
                    checked: props.filterState.courseType["E-Learning"],
                    arguments: [["courseType", "E-Learning"]],
                    classes: classes.elearn
                },
            ]}
        />
    <Credits action={props.action} filterState={props.filterState}/>
    </Grid>
  );
}

export function Catalog(props) {
    return (
        <Grid container justify="center" alignItems="center">
            <VerticalFilterGroup
                action={props.action}
                filters={[
                    {
                        label: "BNE",
                        arguments: [["catalog", "BNE"]],
                    },
                    {
                        label: "IOS",
                        arguments: [["catalog", "IOS"]],
                    },
                    {
                        label: "Culture & Society",
                        arguments: [["catalog", "Kultur und Gesellschaft"]],
                    },
                    {
                        label: "STEM",
                        arguments: [["catalog", "Natur und Technik"]],
                    },
                    {
                        label: "Economics",
                        arguments: [["catalog", "Wirtschaft"]],
                    },
                ]}
                />
            <SearchBar
                value={props.initial}
                onChange={(newValue) => props.action("search", newValue)}
                onCancelSearch={() => props.action("search", "")}
                />
        </Grid>
    );
}
