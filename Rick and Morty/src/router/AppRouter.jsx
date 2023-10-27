import { Routes, Route, Navigate } from "react-router-dom"
// router principal
import React from 'react'
import { CharacterList } from "../pages/CharacterList"
import { FindCharacter } from "../pages/FindCharacter"
import { FindByChapter } from "../pages/FindByChapter"
import { Chapters } from "../pages/Chapters"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="home" element={ <CharacterList/> } />
            <Route path="find" element={ <FindCharacter/> } />
            <Route path="chapters" element={ <Chapters/> } />
            <Route path="findByChapter" element={ <FindByChapter/> } />
            <Route path="/" element = { <Navigate to="home"/> } />
        </Routes>
    </>
  )
}
